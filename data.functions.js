const mLocales = require('./models/locales.model')
const mBebidas = require('./models/bebida.model')

const crear_locales = async (req, res) => {

    const locales = [
        { nombre: 'grietas', direccion: 'Calle 01' },
        { nombre: 'mosquito', direccion: 'Calle 01' },
        { nombre: 'dul_coruna', direccion: 'Calle 01' },
        { nombre: 'sham_rock', direccion: 'Calle 01' },
        { nombre: 'studio_80', direccion: 'Calle 01' },
        { nombre: 'garibaldi', direccion: 'Calle 01' },
        { nombre: 'claro_boba', direccion: 'Calle 01' }
    ]
    for (let idx = 0; idx < locales.length; idx++) {
        const local = locales[idx]
        const local_nuevo = new mLocales(local)
        await local_nuevo.save()
    }

    res.send('ok')
}

const crear_bebidas = async (req, res) => {

    const bebidas = [
        { nombre: 'bebida', tipo: 'cerveza'},
        { nombre: 'bebida', tipo: 'cachaça'},
        { nombre: 'bebida', tipo: 'absenta'},
        { nombre: 'bebida', tipo: 'ron'},
        { nombre: 'bebida', tipo: 'tequila'},
        { nombre: 'bebida', tipo: 'vodka'},
        { nombre: 'bebida', tipo: 'ginebra'},
        { nombre: 'bebida', tipo: 'whisky'},
        { nombre: 'bebida', tipo: 'bourbon'}
    ]
    for(let idx = 0; idx < bebidas.length; idx++) {
        const bebida = bebidas[idx]
        const bebida_nueva = new mBebidas(bebida)
        await bebida_nueva.save()
    }

    res.send('ok')
}

exports.crear_locales = crear_locales
exports.crear_bebidas = crear_bebidas