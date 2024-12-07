import './styles.css'
import { Rocket, Earth, Trophy, Handshake } from 'lucide-react'
import React, { useState, useEffect } from 'react'

export default function Overlay() {
  const [isScrolled, setIsScrolled] = useState(false)

  // Detect scroll event and add blur effect
 


  return (
    <div className="container">


      <div className="main-wrapper">
        <section className="section section-1">
          
        </section>

        <section className="section section-2">

        </section>

        <section className="section section-3 ">
         
        </section>
        <section className="section-4">
          
        </section>
        <section className="section-5">
          
        </section>
        <section className="section-6">
          <section className="section section-2">
            <div className="wrapper">
              <h2>
                Breaking Free from <strong>Centralized Stablecoins</strong>
              </h2>
              <p>
                Traditional stablecoins like <strong>USDT </strong>and <strong>USDC </strong>come
                with centralized risks:
              </p>
              <ul>
                <li>
                  <strong>Centralized Custody: </strong>Single entities control the reserves,
                  introducing risks of freezing, censorship, or seizure.
                </li>
                <li>
                  <strong>Opaque Operations: </strong>Users must trust organizations to uphold
                  reserves, often with limited transparency or auditing.
                </li>
                <li>
                  <strong>Regulatory Vulnerability: </strong>Centralized assets are prone to
                  restrictions and compliance issues, limiting user freedom.
                </li>
              </ul>
              <p>
                <strong>USDX </strong>eliminates these risks entirely, delivering a fully
                decentralized, trustless solution where control lies solely with the community. It’s
                time to break free and embrace a stablecoin built for freedom.
              </p>
            </div>
          </section>
        </section>
        <section className="section-7">
          
        </section>
        
        <section className="section-9">
          
        </section>
      </div>

      <footer>
        <div className="footer-left">
          <h3>USDX</h3>
          {/* <p>Stability Perfected, Freedom Unleashed</p> */}
          <div className="social">
            <img src="instagram.svg" width={20} />
            <img src="youtube.svg" width={20} />
            <img src="x.svg" width={20} />
            <img src="telegram.svg" width={20} />
          </div>
          <p className="copyright">Copyright @tmc.live All rights reserved.</p>
        </div>
        <div className="footer-right">
          <img src="brand.png" width={40} />

          {/* <ul>
            <li>Privacy policy</li>
            <li>Terms of service</li>
            <li>Cookie policy</li>
            <li>Disclaimer</li>
          </ul> */}
        </div>
      </footer>
    </div>
  )
}
