import React from 'react'
import { connect } from 'react-redux'
import '../style.css'

const Ostoskori = ({ korituotteet }) => {
    return (
        <div style={{ paddingTop: 70 }}>
            <div>
                <button className="Btn-poista">Tyhjennä ostoskori</button> <button className="myButton">Osta tuotteet</button>
            </div>
            {korituotteet.map(korituote =>
                <div key={korituote.tuoteId}>

                    <div className="card">

                        <div className="card-header">
                            <p>{korituote.tuotenimi}</p>
                            <p>Hinta:{' '}{korituote.hinta}{' '}€{' '} Toimitustapa: Nouto, Postipaketti</p>
                            <button className="Btn-poista">poista</button>
                            <button className="Btn-plus">+</button>
                            <label>1 kpl</label>
                            <button className="Btn-plus">-</button>

                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        korituotteet: state.korituotteet
    }
}


export default connect(mapStateToProps
)(Ostoskori)