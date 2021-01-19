import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom'
import { playerGetCharacter } from '../../../actions/PlayerActions'
import { changeMinify, changeMenuOnMobile } from '../../../assets/js/scripts'
import { AiOutlineShoppingCart } from 'react-icons/ai'

import './styles.css'

const Header = ({ playerGetCharacter, hideCart }) => {
  const history = useHistory()
  const { name } = useParams()
  const [searchName, setSearchName] = useState()
  const [, setError] = useState(false)

  const Header = React.useRef()
  React.useEffect(() => {
    if (window.localStorage.getItem('mod-skin-dark')) {
      Header.current.checked = true
    } else {
      Header.current.checked = false
    }
  })

  const openDrawer = () => {
    const event = new CustomEvent('openCart')
    window.dispatchEvent(event)
  }

  const toggleTheme = () => {
    document.body.classList.toggle('mod-skin-dark')

    document.body.classList.contains('mod-skin-dark')
      ? localStorage.setItem('mod-skin-dark', true)
      : localStorage.removeItem('mod-skin-dark')
  }

  const themeSavedLocalStorage = () => {
    const getThemeFromLocalStorage = localStorage.getItem('mod-skin-dark')

    getThemeFromLocalStorage
      ? document.body.classList.add('mod-skin-dark')
      : localStorage.removeItem('mod-skin-dark') &&
        document.body.classList.remove('mod-skin-dark')
  }
  themeSavedLocalStorage()

  useEffect(() => {
    if (name !== undefined) {
      playerGetCharacter(name)
        .then(({ payload }) => {
          /* data players */
          const dataPlayers = payload.data
          setSearchName(dataPlayers)
        })
        .catch((err) => {
          const { data } = err.response
          setError(data.message)
        })
    }
  }, [name, playerGetCharacter])

  const submitHandle = (e) => {
    e.preventDefault()

    history.push(`/character/${searchName}`)
  }

  return (
    <header className="page-header" role="banner">
      <div className="page-logo">
        <span
          className="page-logo-link press-scale-down d-flex align-items-center position-relative"
          data-toggle="modal"
          data-target="#modal-shortcut"
        >
          <span className="page-logo-text mr-1">Hati AAC</span>
          <span className="position-absolute text-white opacity-50 small pos-top pos-right mr-2 mt-n2"></span>
          <i className="fal fa-angle-down d-inline-block ml-1 fs-lg color-primary-300"></i>
        </span>
      </div>

      <div className="hidden-md-down dropdown-icon-menu position-relative">
        <span
          className="header-btn btn js-waves-off"
          data-action="toggle"
          data-classname="nav-function-hidden"
          title="Hide Navigation"
          onClick={() => changeMinify()}
        >
          <i className="ni ni-menu text-primary"></i>
        </span>
      </div>

      <div className="hidden-lg-up">
        <span
          className="header-btn btn press-scale-down waves-effect waves-themed"
          data-action="toggle"
          data-classname="mobile-nav-on"
          onClick={() => changeMenuOnMobile()}
        >
          <i className="ni ni-menu"></i>
        </span>
      </div>

      <div className="search">
        <form
          onSubmit={submitHandle}
          className="app-forms hidden-xs-down"
          role="search"
          autoComplete="off"
        >
          <input
            onChange={(e) => setSearchName(e.target.value)}
            type="text"
            className="form-control shadow-inset-2"
            id="search-field"
            placeholder="Search of Character"
            aria-label="type 2 or more letters"
            tabIndex="1"
          />
        </form>
      </div>
      <div className="ml-auto d-flex">
        {/* activate app search icon (mobile) */}
        <div className="hidden-sm-up">
          <span
            className="header-icon"
            data-action="toggle"
            data-class="mobile-search-on"
            data-focus="search-field"
            title="Search"
          >
            <i className="fal fa-search" />
          </span>
        </div>
        {/* app settings */}
        <div className="hidden-md-down">
          <input
            className="checkbox"
            type="checkbox"
            name="general"
            id="general"
            onChange={toggleTheme}
            ref={Header}
          />
          <label className="for-checkbox" htmlFor="general"></label>
        </div>
      </div>

      {!hideCart && (
        <span onClick={() => openDrawer()}>
          <AiOutlineShoppingCart size={24} className="ml-3" />
          (2) Itens
        </span>
      )}
    </header>
  )
}

const mapStateToProps = (state) => {
  return {
    players: state.player.player,
  }
}

export default connect(mapStateToProps, { playerGetCharacter })(Header)
