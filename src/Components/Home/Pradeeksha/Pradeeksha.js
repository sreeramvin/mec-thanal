import './Pradeeksha.css'
import AOS from 'aos';
import { useEffect } from 'react';
import "aos/dist/aos.css";

export default function Pradeeksha() {
  useEffect(() => {
    AOS.init({
      duration: 800
    })
  },[])
  return (
    <div className="Pradeeksha">
      <div>
        <p className="Pradeeksha-heading" data-aos={"fade-down"}>PRATHEEKSHA</p>
      </div>
      <div className="Pradeeksha-content">
        <div className="Pradeeksha-content-text">
          <p className="Pradeeksha-text" data-aos={"fade-down"}>
          Pratheeksha is an initiative by THANAL to provide financial aid and support to patients undergoing their dialysis treatments. THANAL aims to abet such individuals who are incompetent to afford treatment and to provide a beacon of hope for such individuals. The funds which are raised on a monthly basis by THANAL are contributed for their medications and  treatments.THANAL has helped and aims to reach out to more people with this initiative.
          </p>
        </div>
      </div>
    </div>
  )
}