class fetchAdapter {

    constructor(baseUrl){
        this.baseUrl = baseUrl
    }

    get(relativeUrl, callback) {

        fetch(`${this.baseUrl}${relativeUrl}`)
        .then(response => response.json())
        .then(callback)

    }



}