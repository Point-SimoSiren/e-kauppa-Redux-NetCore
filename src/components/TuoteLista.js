import React from 'react'
import { connect } from 'react-redux'
import { addKori } from '../reducers/koriReducer'
import { notificationAction } from '../reducers/notificationReducer'
import '../style.css'

const TuoteLista = (props) => {

    const pick = (tuote) => {
        props.addKori(tuote)
        console.log('valittu', tuote)
        props.notificationAction(`${tuote.tuotenimi}" lisätty ostoskoriin`, 7)
    }
    return (
        <div>
            <h3>Tuotteet</h3>

            {props.tuotteet.map(tuote =>
                <div key={tuote.tuoteId} className="card">

                    <div className="card-header">
                        <h4>{tuote.tuotenimi}</h4>
                    </div>
                    <div className="card-body">
                        <p>{tuote.kuvaus}</p>
                        <h4>Hinta {tuote.hinta} €</h4>
                        <h4>Tuotetta jäljellä: {tuote.varastosaldo} kpl</h4>
                        <button class="myButton" onClick={() => pick(tuote)} >osta</button>
                    </div>
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
