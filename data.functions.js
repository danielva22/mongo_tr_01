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
        { nombre: 'bebida1', tipo: 'cerveza'},
        { nombre: 'bebida2', tipo: 'cachaça'},
        { nombre: 'bebida3', tipo: 'absenta'},
        { nombre: 'bebida4', tipo: 'ron'},
        { nombre: 'bebida5', tipo: 'tequila'},
        { nombre: 'bebida6', tipo: 'vodka'},
        { nombre: 'bebida7', tipo: 'ginebra'},
        { nombre: 'bebida8', tipo: 'whisky'},
        { nombre: 'bebida9', tipo: 'bourbon'}
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