"use client"
import React from 'react';

function Home() {
  const [count, setCount] = React.useState(0);
  var [items, setItems] = React.useState<string[]>([]);

  return (
    <>
    <header className="sticky top-0 z-50 flex justify-around">
      <input value={count} className='text-black text-center text-2xl w-[40%]' />
      <button className="bg-red-700 text-white text-2xl font-extrabold h-[100%] w-[30%]" onClick={() => { setCount(count - count); setItems(items=[]); console.log(items)}}>
        CLEAR
      </button>
    </header>

    <div className="grid py-2 px-10">

      <h1 className="text-center" key="h0" >Dryck</h1>

      <button key="0" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 15); items.push("Kaffe/Te"); console.log(items)}}>
        <div>Kaffe/Te</div><div>15kr</div>
      </button>

      <button key="1" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 10); items.push("Kaffe/Te (egen mugg)"); console.log(items)}}>
      <div>Kaffe/Te (egen mugg)</div><div>10kr</div>
      </button>

      <button key="2" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 20); items.push("Cola/Läsk/Loka"); console.log(items)}}>
      <div>Cola/Läsk/Loka</div><div>20kr</div>
      </button>

      <button key="3" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 15); items.push("Festis"); console.log(items)}}>
      <div>Festis</div><div>15kr</div>
      </button>

      <h1 className="text-center">Smörgåsar</h1>

      <button key="4" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 20); items.push("Ost/Rökt skinka"); console.log(items)}}>
      <div>Ost/Rökt skinka</div><div>20</div>
      </button>

      <button key="5" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 30); items.push("Kötbullar"); console.log(items)}}>
      <div>Kötbullar rödbeta</div><div>30kr</div>
      </button>

      <button key="6" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 30); items.push("Salami Brie"); console.log(items)}}>
        <div>Salamie Brie</div><div>30kr</div>
      </button>

      <h1 className="text-center" key="h1">Kaffebröd</h1>

      <button key="7" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 20); items.push("Hembakat"); console.log(items)}}>
        <div>Hembakat</div><div>20kr</div>
      </button>

      <button key="8" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 10); items.push("Småkaka"); console.log(items)}}>
        <div>Småkaka</div><div>10kr</div>
      </button>

      <h1 className="text-center" key="h2">Mat</h1>

      <button key="9" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 50); items.push("Börgare/grillost"); console.log(items)}}>
        <div>Burgare/Grillost</div><div>50kr</div>
      </button>

      <button key="10" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 20); items.push("Korv"); console.log(items)}}>
        <div>Varmkorv</div><div>20kr</div>
      </button>

      <h1 className="text-center" key="h3">Annat</h1>

      <button key="11" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 10); items.push("Frukt"); console.log(items)}}>
        <div>Frukt</div><div>10kr</div>
      </button>

      <button key="12" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 15); items.push("Choklad"); console.log(items)}}>
        <div>Kexchoklad, Chkladbitar</div><div>15kr</div>
      </button>

      <button key="13" className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200 justify-between container mx-auto" onClick={() => { setCount(count + 20); items.push("Godispåsar"); console.log(items)}}>
        <div>Godispåsar</div><div>20kr</div>
      </button>

    </div>
    </>
  );
}

export default Home;