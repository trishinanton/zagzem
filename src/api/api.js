
export const villages = []

export async function getDataFromWp(url) {
    try {
        let response = await fetch(url);
        if(response.ok) {
            let arrFromWp = await response.json()
            arrFromWp.forEach(el => villages.push({id: el.id, ...el.acf}))
        } else {
            throw new Error(`Could not fetch ${url}`)
        }
    } catch (e) {
        console.log(e);

    }
}

export function sendMessageAmoCRM(name, phone, email, text) {
    let formData = new FormData();
    formData.append('fields[name_2]', `Заявка с 'Загородные земли'`)
    if(name) formData.append('fields[name_1]', name);
    if(phone) formData.append('fields[222715_1][430461]', phone);
    if(email) formData.append('fields[222717_1][430473]', email);
    if(text) formData.append('fields[note_2]', text);

    formData.append('form_id', '582790');
    formData.append('hash', '384168b51bc44afef80081fe1c9de840');

    return fetch('https://forms.amocrm.ru/queue/add', {
        method: 'POST',
        body: formData
    })
}

export function sendPlanAmoCRM(email, village) {
    let formData = new FormData();

    formData.append('fields[name_2]', 'Отправить планировку поселка на почту')
    formData.append('fields[222717_1][430473]', email);
    formData.append('fields[note_2]', `Отправить планировку поселка ${village} на ${email}`);

    formData.append('form_id', '892084');
    formData.append('hash', 'ecb202cf2535d0e2e6d8486fe5363dfd');

    return fetch('https://forms.amocrm.ru/queue/add', {
        method: 'POST',
        body: formData
    })
}






