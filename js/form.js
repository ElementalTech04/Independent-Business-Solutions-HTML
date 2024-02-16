
const formSubmissionURL = ""

const formSubmissionAPIKey = ""

const fetchToFormAPI = async (options) => {
    options['headers'] = {
        ...options.headers ? options.headers : {},
        'x-api-key': formSubmissionAPIKey,
    }
    return await fetch(formSubmissionURL, options)
}

const gatherFormInputs = (elements) => {
    let formInputs = {}

    elements.forEach(element => {
        formInputs = {
            ...formInputs,
            [element.name]: document.getElementById(element.id).innerText
        }
    })

    return formInputs
}

export const postContactForm = (formInput) => {
    const formInputs = {
        ...getComputedStyle(formInput)
    }
    const body = {
        formDetails: formInput,
        sourceId: 'IBS',
        actionId: 'CONTACT'
    }

    const headers = {
        "Content-Type": "application/json"
    }
    let options = {
        method: 'POST',
        referrer: window.location.origin,
        body: body,
        keepalive: false,
        cache: "default",
        headers: headers,
        window: window
    }

    fetchToFormAPI(options).then(response => {
        console.log(response)
    }).catch(error => {
        console.error(error)
    })
}