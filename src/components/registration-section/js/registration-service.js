const RegistrationService = (() => {
    const api = "http://localhost/";

    function $request (type, url, data) {
    	if (!!data) {
    		data = JSON.stringify(data);
    	}

    	return $.ajax({
            type,
            dataType: 'json',
            contentType: 'application/json',
            url,
            data
        });
    }

    return {
        postForm(){
            return $.post('/registration-form', $('#registration-form').serialize());
        }
    };
})();
