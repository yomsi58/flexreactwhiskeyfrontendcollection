const token = '3cadbf073fb24ae43909c66374b6fab86d62e2e9bb6cfee1'

export const server_calls = {
    get: async () => {
        const response = await fetch('https://aback-chief-vein.glitch.me/api/collection', {
            method: 'GET',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to get data')
        }
        return await response.json()
    },

    create: async (data:any) => {
        const response = await fetch('https://aback-chief-vein.glitch.me/api/collection', {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to create data')
        }
        return await response.json()
    },

    update: async (id: string, data: any) => {
        const response = await fetch(`https://aback-chief-vein.glitch.me/api/collection/${id}`, {
            method: 'POST',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            },
            body: JSON.stringify(data)
        });
        if (!response.ok) {
            throw new Error('Failed to update data')
        }
        return await response.json()
    },

    delete: async (id: string) => {
        const response = await fetch(`https://aback-chief-vein.glitch.me/api/collection/${id}`, {
            method: 'DELETE',
            headers: {
                'Content-Type':'application/json',
                'x-access-token':`Bearer ${token}`
            }
        });
        if (!response.ok) {
            throw new Error('Failed to delete data')
        }
        return
    },
}