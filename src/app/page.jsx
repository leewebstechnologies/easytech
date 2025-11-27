import Topnav from "@/components/header/topnav/Topnav"
import Menu from "@/components/header/menu/Menu"
import Slider from "@/components/slider/Slider"
import Service from "@/components/service/Service"
import serviceData from "@/data/service.json";
import PaymentGateway from "@/components/PaymentGateway/PaymentGateway";
import CaseStudy from "../components/CaseStudy/CaseStudy";
import PaymentGatewayTwo from "@/components/PaymentGateway/PaymentGatewayTwo";


const Homepage = () => {
  return (
    <div className='overflow-x-hidden'>
      <header id="header">
        <Topnav />
        <Menu />
      </header>
      <main className="content">
        <Slider />
        <Service data={serviceData}/>
        <PaymentGateway />
        <CaseStudy />
        <PaymentGatewayTwo />
      </main>     
    </div>
  )
}

export default Homepage