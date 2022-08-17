import { useState } from "react";
import Link from "next/link";
import Layout from "../components/Layout";

const Coins = ({ data }) => {
  console.log(data);
  const [coins] = useState(data.coins);

  return (
    <Layout>
      <ul className="flex flex-wrap w-11/12 h-screen m-auto mt-10 justify-center  ">
        {coins.map((coin) => (
          <li
            key={coin.id}
            className="flex flex-wrap w-1/5 box-border border-2 border-gray-300 h-1/5 items-center justify-evenly m-3 hover:bg-gray-100 "
          >
            <Link href={`/coins/${coin.id}`}>
              <a>
                <img src={coin.icon} alt={coin.symbol} className="w-20" />
              </a>
            </Link>
            <div>
              <h2>Rank: {coin.rank}</h2>
              <div>Price: {coin.price}</div>
              <h2>Name: {coin.name}</h2>
            </div>
          </li>
        ))}
      </ul>
    </Layout>
  );
};

export default Coins;

export async function getStaticProps(context) {
  const response = await fetch(
    "https://api.coinstats.app/public/v1/coins?skip=0"
  );
  const data = await response.json();

  return {
    props: { data },
  };
}
