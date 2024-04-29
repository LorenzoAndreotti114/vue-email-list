
const { createApp } = Vue

createApp({

data() {
    return {
        curEmail: "",
        emails: [],
    }
},

created() {
    

},

methods: {

    generateEmails: function() {

        for (let x = 0; x <= 10; x++) {

            axios
            .get("https://flynn.boolean.careers/exercises/api/random/mail")
            .then((mails) => {
                console.log(mails.data.response);
                this.emails.push(mails.data.response)
                console.log(this.emails);
            });

        }
       
    }

},

}).mount('#app')