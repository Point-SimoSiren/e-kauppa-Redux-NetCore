import React from 'react'
import { connect } from 'react-redux'
import { addKori } from '../reducers/koriReducer'
import { notificationAction } from '../reducers/notificationReducer'
import '../style.css'

const arduinoKuva = require('./test.jpeg')

const TuoteLista = (props) => {

    const pick = (tuote) => {
        props.addKori(tuote)
        console.log('valittu', tuote)
        props.notificationAction(`${tuote.tuotenimi}" lisättiin ostoskoriin!`, 5)
    }
    return (
        <div style={{ paddingTop: 70 }}>
            <h4>Tuotteet</h4>

            {props.tuotteet.map(tuote =>
                <div key={tuote.tuoteId} className="card">

                    <div className="card-header">
                        <h4>{tuote.tuotenimi}</h4>
                    </div>

                    <div className="card-body">
                        <img style={{ width: 250, height: 150 }} src={arduinoKuva}
                            alt='kuva' />

                        <h5>{tuote.kuvaus}</h5>
                        <h4>Hinta {tuote.hinta} €</h4>
                        <h4>Tuotetta jäljellä: {tuote.varastosaldo} kpl</h4>
                        <button className="myButton" onClick={() => pick(tuote)} >osta</button>
                    </div>
                    <br />
                </div>

            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        tuotteet: state.tuotteet,
        notification: state.notification
    }
}
const mapDispatchToProps = {
    addKori, notificationAction
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(TuoteLista)

