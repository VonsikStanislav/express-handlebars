const fs = require('fs');
const path = require('path');

class Record{
    constructor(){
        this.filePath = path.join(process.cwd(), 'phonebook.json');
        this.records = this.loadRecord();
        this.idCounter = this.records.length ? Math.max(...this.records.map(el => el.id)) + 1 : 1;
    }
    loadRecord(){
       if(fs.existsSync(this.filePath)){
            try{
                let data = fs.readFileSync(this.filePath);
                return JSON.parse(data);
            }
            catch(error){
                console.error(`Ошибка загрузки json-файла. ${error}`);
                return [];
            }
       }else{
        return [];
       }
       
    }
    saveRecords(){
        try{
            fs.writeFileSync(this.filePath, JSON.stringify(this.records, null, 4))
        }
        catch(error){
            console.error(`Ошибка записи данных в файл. ${error}`);
        }
    }
    getAll(){
        return this.records;
    }
    getById(id){
        return this.records[this.records.findIndex(el =>el.id == id)] || null;
    }
    create(data){
        const newRecord = {
            id: this.idCounter++,
            name: data.name,
            surname: data.surname,
            patronymic: data.patronymic,
            phone: data.phone,
        }
        this.records.push(newRecord);
        this.saveRecords();
        return newRecord;
    }
    update(id, data){
        let index = this.records.findIndex(el =>el.id == id)
        if(index !== -1){
            this.records[index] = {
            ...this.records[index],
            ...data
        };
            this.saveRecords();
            return this.records[index];
        }else{
            return null;
        }
    }
    delete(id){
        let index = this.records.findIndex(el => el.id == id)
        if(index == -1){
            return null;
        }
        const deleted = this.records.splice(index, 1)[0];

        this.saveRecords();

        return deleted;
    }
}

module.exports = new Record();