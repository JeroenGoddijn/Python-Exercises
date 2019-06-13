ajaxCall() {
    fetch('/api')
        .then(response => response.json())
        .then(data => {
            let messages = document.getElementById('messages')
            let msgFormat = ""

            data.forEach(msg => {
                msgFormat += `<h1>${msg.fname} ${msg.lname}</h1>`
            })

            messages.innerHTML = msgFormat;
        }
        let form = document.getElementsByTagName('form')

        form[0].addEventlistener('submit', (e) => {
            e.preventDefault();

            fetch('/about', {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: {
                    JSON.stringify({
                        fname: document.getElementById('fname').value,
                        lname: document.getElementById('lname').value,
                        city: document.getElementById('city').value
                    })
                }
            })
                .then(data => data.json())
                .then((response) => {
                    let messages = document.getElementById('messages')
                    let msgFormat = ""

                    data.forEach(msg => {
                        msgFormat += `<h1>${msg.fname} ${msg.lname}</h1>`
                    })

                    messages.innerHTML = msgFormat;

                })

        })
    };
