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

      <h1>Dryck</h1>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 15); items.push("Kaffe/Te"); console.log(items)}}>
        Kaffe/Te
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 10); items.push("Kaffe/Te (egen mugg)"); console.log(items)}}>
        Kaffe/Te (egen mugg)
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 20); items.push("Cola/Läsk/Loka"); console.log(items)}}>
        Cola/Läsk/Loka
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 15); items.push("Festis"); console.log(items)}}>
        Festis
      </button>

      <h1>Smörgåsar</h1>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 20); items.push("Ost/Rökt skinka"); console.log(items)}}>
        Ost/Rökt skinka
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 30); items.push("Kötbullar"); console.log(items)}}>
        Kötbullar rödbeta
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 30); items.push("Salami Brie"); console.log(items)}}>
        Salamie Brie
      </button>

      <h1>Kaffebröd</h1>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 20); items.push("Hembakat"); console.log(items)}}>
        Hembakat
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 10); items.push("Småkaka"); console.log(items)}}>
        Småkaka
      </button>

      <h1>Mat</h1>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 50); items.push("Börgare/grillost"); console.log(items)}}>
        Burgare/Grillost
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 20); items.push("Korv"); console.log(items)}}>
        Varmkorv
      </button>

      <h1>Annat</h1>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 10); items.push("Frukt"); console.log(items)}}>
        Frukt
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 15); items.push("Choklad"); console.log(items)}}>
        Kexchoklad, Chkladbitar
      </button>

      <button className="bg-gray-100 text-black p-7 my-2 active:bg-orange-500 focus:bg-orange-200" onClick={() => { setCount(count + 20); items.push("Godispåsar"); console.log(items)}}>
        Godispåsar
      </button>

    </div>
    
    <div className='text-black'>{items.map( e =>
          <div>{ e }</div>
        )}
        </div>

    </>
  );
}

export default Home;