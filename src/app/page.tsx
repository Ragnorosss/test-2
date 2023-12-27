import Image from "next/image";
import heroImg from '@/img/iMac.png';
import { Input } from "@/components/input/Input";
import { Button } from "@/components/button/Button";

export default function Home() {
  return (
    <main>
      <div className="container">
        <div className="wrapper">
          <Image
            src={heroImg}
            alt='iMac'
            width ='635.711'
            height='525'
          />
          <div className='info'>
            <h1 className='title'>Amazon</h1>
            <h2 className='subtitle'>Amazon – магазин с большим выбором товаров. Bringer UA осуществляет доставку товаров c Amazon из США в Украину по выгодным тарифам.</h2>
            <div className='item'>
              <Input type='text' placeholder="Вставить ссылку на товар" disabled={true}/>
              <Button text="Заказать"/>
            </div>
            <h3 className="price-title">Расчитай  стоимость доставки товаров из Польши</h3>
            <Input type='text' placeholder="Цена товара, zł"/>
            <Button text="Расчитать"/>
            <div className="price">
              <p>Сумма, zł <span>1234,56</span></p>
              <p>Сумма, ₴  <span>1234,56</span></p>
            </div>
            <div className="facture">
              <Input type='checkbox' />
              <label>На товар (новый или б/у) не выставляется фактура VAT (добавляется 15% комиссия)</label>
            </div>
            <div className="descriptions">
              <p>Немецкий магазин в ассортименте которого более 50 000 товаров – начиная от бытовой электроники, таких как ноутбук, планшет и ТВ заканчивая бытовой техникой как стиральная машина и холодильник. Садовое оборудование Kärcher и газонокосилки. Ассортимент включает все, вплоть до игрушек ЛЕГО и Барби для самых маленьких. Продукция на любой кошелек и от известных производителей, таких как Apple, ASUS, Intel, Microsoft, Samsung, Canon, Liebherr, Bosch, etc.</p>
              <span className="delivery">Доставки: <span className="time">до 7 дней</span></span>
              <span className="commission">Комиссия <span className="percentage">0,68%</span></span>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
