export async function GetAllSupliers(url) {
    let data;
    let error;
    await axios.get(url)
        .then(res => data = res.data)
        .catch(err => error = err);

    return {
        data, error
    }
}


export async function GetSuplierById(url, id) {
    let data;
    let error;
    await axios.get(`${url}/${id}`)
        .then(res => data = res.data)
        .catch(err => error = err);

    return {data,error}

}

export async function DeleteSuplier(url, id) {
    let data;
    let error;

    await axios.delete(`${url}/${id}`)
        .then(res => data = res.data)
        .catch(err => error = err);

    return {
        data, error
    }
}
export async function PostSuplier(url, newData) {
    let data;
    let error;
    await axios.post(url, newData)
        .then(res => data = res.data)
        .catch(err => error = err);

    return {
        data, error
    }
}
export async function UpdateSuplier(url, id, updateData) {
    let data;
    let error;
    await axios.put(`${url}/${id}`, updateData)
        .then(res => data = res.data)
        .catch(err => error = err);

    return {
        data, error
    }
}