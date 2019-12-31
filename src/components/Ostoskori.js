import React from 'react'
import { connect } from 'react-redux'

const Ostoskori = ({ korituotteet }) => {
    return (
        <div style={{ paddingTop: 70 }}>
            <h3>Ostoskori</h3>
            {korituotteet.map(korituote =>
                <div key={korituote.tuoteId}>
                    <div style={{ backgroundColor: 'lightBlue' }}>
                        <p>{korituote.tuotenimi}</p>
                        <p>{korituote.kuvaus}</p>
                        <p>{korituote.hinta}</p>
                    </div>
                    <button>poista</button>
                    <button>+</button>
                    <button>-</button>
                    <p>kpl</p>

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