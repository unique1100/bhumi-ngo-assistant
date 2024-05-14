import { CreatePost } from '../_components/Chat/create-post';
import Header from '../_components/Chat/Header';

const ChatPDF = () => {

  return (
    <div className='container mt-6'>
      <Header/>
      
      <CreatePost/>
    </div>
  );
};

export default ChatPDF;
