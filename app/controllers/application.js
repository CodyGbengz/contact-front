import Controller from '@ember/controller';

export default Controller.extend({
    actions: {
        createContact() {
            let newContact =  this.get('contact-card')
            let newRecord = this.store.createRecord('contact', {
                name: newContact
            })
            newRecord.save()
        },

        readContacts() {
            this.store.findAll('contacts').then((contacts) => {
                alert(contacts.get('name'))
            }) 
        },

        destroyContact(id) {
            this.get('store').find('contact', id).then(function(rec){
                rec.deleteRecord();
                rec.save()
            })
          }
    }
});
