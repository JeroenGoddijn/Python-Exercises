$(
    function() {

        $('form').submit((e) => {
            e.preventDefault()
            $.post('/api', {
                name: $('#name').val(),
                email: $('#email').val(),
                mobile: $('#mobile-number').val()
            }, successFunction)
        })
        let successFunction = (data) => {
            $('#message').html('successfully posted form data')
        }

    }
)
