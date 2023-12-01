import { Navbar } from '../Common';
import { DIV } from '../Common';

const Header = () => {
  return (
    <div className='h-[500px] bg-[#004cd2] w-full'>
      <DIV>
        <Navbar />
        <div className='flex justify-between content-center items-center'>
          <div>
            <p>Paragraph Text</p>
          </div>
          <div>
            <form>
              <input type='text' />
            </form>
          </div>
        </div>
        <div>
          <img src='' />
          <img src='' />
          <img src='' />
          <img src='' />
          <img src='' />
        </div>
      </DIV>
    </div>
  );
};

export default Header;
