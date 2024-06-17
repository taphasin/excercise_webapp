import Card from './card.js';
import './App.css';
import './button.js'
import VoteButtonone from './button.js';
import VoteButtontwo from './buttontwo.js';

function App() {
  return (
      <>
        <div style={{textAlign: 'center',color:'#FFCF00'}}> 
          <h1>โหวตอาหาร</h1>
        </div>

        <div class="main">
          <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
            <div>
              <Card type="ข้าว" title="หมูนุ่มผัดพริกขิง" description="ใครชอบกินหมูนุ่ม ต้องจดให้ไวเลยค่ะ กับเมนู “หมูนุ่มผัดพริกขิง” เมนูกับข้าวง่าย ๆ ที่ใคร ๆ ก็ทำเองได้ที่บ้าน รสชาติจัดจ้านหอมพริกแกงเผ็ด ขิง และใบมะกรูด เข้ากับเนื้อหมูหมักนุ่ม ๆ ชิ้นพอดีคำ กินกับข้าวสวยและผักสดคือดีงามสุด ๆ ใครกังวลว่าจะต้องเสียเวลาหมักหมู กว่าจะปรุง กว่าจะนุ่ม ไม่ต้องห่วงเลยค่ะ เพราะเรามีตัวช่วยอย่าง หมูหมักนุ่มแช่แข็ง ตราเอโร่ที่เพียงแค่นำมาละลายก็ปรุงได้ทันที ผ่านการหั่น หมัก และปรุงมาเรียบร้อย ได้รสชาติและรสสัมผัสที่นุ่มนวลกำลังดี ทำให้สูตรผัดพริกขิงของเราง่ายขึ้นเยอะเลยค่ะ ถ้าเพื่อน ๆ พร้อมกันแล้ว "
              pictureimg = "https://img.wongnai.com/p/1920x0/2023/12/08/0ee6f5ec69d14bde8fae103b2f5df8c8.jpg"/>
            </div>
            <div>
                <VoteButtonone/>
            </div>
          </div>
        </div>

        <div class="main">
          <div style={{ display: 'flex', flexDirection: 'column' ,alignItems: 'center'}}>
            <div>
            <Card type="ผัก" title="สาหร่ายลุยสวน" description="สายสุขภาพมาทางนี้เลยค่ะ เพราะวันนี้เรามีสูตร “สาหร่ายลุยสวน” หรือก๋วยเตี๋ยวลุยสวนแบบตัดแป้ง ที่หยิบเอาสาหร่ายทะเลย่างหอม ๆ มาห่อแทน จิ้มกับน้ำจิ้มลุยสวนแซ่บ ๆ ได้ฟีลฟิวชันเกาหลีเกาใจเบา ๆ โดยวันนี้เราจะใช้ เอโร่ สาหร่ายทะเลย่าง สาหร่ายทะเลแท้จากเกาหลี ย่างจนมีกลิ่นหอมยั่วใจ กรอบทั่วทั้งแผ่น ที่สำคัญแผ่นใหญ่จุใจ เอามาทำเมนูลุยสวนแบบนี้บอกเลยว่าเด็ดค่ะ ถ้าเพื่อน ๆ พร้อมกันแล้ว เรามาเข้าครัวดูวิธีทำสาหร่ายลุยสวนกันเลยดีกว่า!"
          pictureimg = "https://img.wongnai.com/p/1920x0/2023/12/04/141fe7eb5a574e1baf4f167f0be23e83.jpg"/>
            </div>
            <div>
                <VoteButtontwo/>
            </div>
          </div>
        </div>
      </>
  );
}

export default App;
