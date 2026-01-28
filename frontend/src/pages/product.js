import Link from 'next/link'
import { CldImage } from 'next-cloudinary'
import { MdOutlineClose } from "react-icons/md";
import { useContext, useEffect, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import Header from '@/components/Header';
import { CiHeart } from "react-icons/ci";
import { FaHeart } from "react-icons/fa";
import { CartContext } from '@/context/CartContext';
import AllProductGrid from '@/components/productSample';

export default function ProductGrid(){
  const products = [
    {id: 'geo', name: 'Majosa Geotechnical Investment Ltd', desc: 'We provide responsible, efficient, and sustainable mining operations that unlock the full potential of Africa’s natural resources.', img: "28d7e9a1-c9ef-4340-8610-6db1b7f9fdd9_wy13q1", features: [ "Exploration", "Mining", "Borehole Drilling", "Geotechnical Engineering", "Geotechnical Survey & Consulting", "Mineral Export"], collage: ["a358022c-5196-42c8-8f63-e0a62f4b0b82_i7lq9q", "1842d7b7-1a75-448d-813a-f1dd34efd303_r9u7vh", "2baa2ca0-75f0-48fd-926a-6ae1696a562e_x6dwh8", "32a9896f-37cb-4d98-be47-9fcfa4895826_yf3aye", "49cf8411-d96f-4cc3-9e76-59aba141e706_vzprlc"], bgColor: "bg-slate-600" },
    {id: 'agro', name: 'Majosa Agrochemical Limited', desc: 'Driving food security through modern agriculture and rice processing. Our 24-ton-per-day rice mill supports Nigeria’s agricultural value chain, while our fertilizer and agrochemical services empower farmers nationwide.', img: "d0d2e546-da2c-473b-b2c3-228b659b153c_yoah5j", features: [ "Rice Farming & Processing", "Fertilizer & Agrochemical Sales", "Mechanized Farming"], collage: ["0ebe12b9-35b3-4e83-ae87-e272e6ab5ad9_bhcufs", "004f9437-c1bb-47fe-a93d-d929f4f4608b_xdkmcm", "52bffc29-3cc0-4262-89dd-29994e5364a5_rb8fmt"], bgColor: "bg-green-700" },
    {id: 'global', name: 'Majosa Global Services Nig. Ltd', desc: 'We build infrastructure and deliver engineering excellence that supports national development.', img: "f9018f9c-ac22-470c-8aff-0ff288defde1_ywmdeu", features: [ "Civil & Structural Construction", "Real Estate Development", "Oil & Gas Support Services", "General Contracting"], collage: ["b0c7eaeb-fd62-4aea-ab8e-93ca6bf60f5a_ufxi3n", "145632f1-0d8e-4f69-8ed1-47a45d55d943_nezrsa", "3e317122-a42f-4331-8301-6e602ba90ce6_tetzjf", "ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw"], bgColor: "bg-orange-500"},
    {id: 'enterprise', name: 'Majosa Enterprise', desc: 'Your neighborhood supermarket and retail hub offering quality products at affordable prices.', img: "0b6f32ef-3f41-4996-b1d7-0d90d3273968_djtgri", features: ["Retail Supermarket", "General Merchandise & Distribution"], collage:["ba1a4047-07a9-4a00-81a9-fa57826f65b0_gkuoiw", "9853f9c0-8bc5-4c62-8054-03aaa4ef6257_f9nomh"], bgColor: "bg-lime-300"}
  ]

  const [selectedId, setSelectedId] = useState(null);
  const activeCard = products.find(c => c.id === selectedId);
  const [activeImage, setActiveImage] = useState(0);
  const router = useRouter();
  const hash = router.asPath.split("#")[1]; // extract the part after #
  const { clicked, setClicked, hovMsg, setHovMsg } = useContext(CartContext)

  
  const productDetailPage = "/product";
  const handleCardClick = (id) => {
    if (router.pathname !== productDetailPage) {
      router.push({
        pathname: productDetailPage,
        query: { select: id },
      });
      return;
    }

    setSelectedId(id);
  };

  useEffect(() => {
    if (router.query.select) {
      setSelectedId(router.query.select);
    }
  }, [router.query.select]);

  function GalleryCarousel({ images, alts }) {
    const [index, setIndex] = useState(0);

    // Auto-rotate images
    useEffect(() => {
      if (!images.length) return;

      const interval = setInterval(() => {
        setIndex((prev) => (prev + 1) % images.length);
      }, 4000); // 4s per slide

      return () => clearInterval(interval); // cleanup on unmount
    }, [images]);

    if (!images.length) return null;

    return (
      <div className="relative w-full mt-15 bg-cyan-50 h-full">
        <CldImage
          src={images[index]}
          alt="Image Not Available"
          fill
          className="object-cover rounded-2xl w-full h-full"
          // sizes="100vw"
        />
      </div>
    );
  }

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash);
      if (el) {
        el.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);

    const toggleLike = (id) => {
    setClicked(prev => ({
        ...prev,
        [id]: !prev[id]
    }));
    };

    const showHover = (id) => {
        setHovMsg(prev => ({ ...prev, [id]: true }));
    };

    const hideHover = (id) => {
        setHovMsg(prev => ({ ...prev, [id]: false }));
    };

  return (
    <>     
    <Header />
    <AllProductGrid />
    </>
  )
}