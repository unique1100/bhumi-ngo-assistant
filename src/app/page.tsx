import Header from "./_components/Home/Header";
import Perks from "./_components/Home/Perks";
import Programs from "./_components/Home/Programs";

export default async function Home() {

  return (
    <div>
      <Header/>
      <Perks/>
      <Programs/>
    </div>
  );
}
