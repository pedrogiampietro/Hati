import React from 'react'
import Dock from 'react-dock'
import ProductList from '../../components/Product/List'
import './styles.css'

const SidebarBag = () => {
  const [opened, setOpened] = React.useState(false)

  React.useEffect(() => {
    window.addEventListener('openCart', () => {
      setOpened(true)
    })
  }, [])

  return (
    <Dock
      isVisible={opened}
      onVisibleChange={(visible) => {
        setOpened(visible)
      }}
      position="right"
    >
      <div className="container-fluid h-100 pt-4 sidebar">
        <h5>My Bag (5)</h5>

        <div className="row products">
          {[1, 2, 3, 4, 5].map((p) => (
            <ProductList />
          ))}
        </div>

        <div className="row align-items-end footer">
          <div className="col-12 d-flex justify-content-between align-items-center">
            <b className="d-inline-block">Total</b>
            <h3 className="d-inline-block">R$ 90,00</h3>
          </div>
          <button className="btn btn-block btn-lg btn-primary rounded-0 h-50 align-items-center">
            Finalizar Compra
          </button>
        </div>
      </div>
    </Dock>
  )
}

export default SidebarBag
