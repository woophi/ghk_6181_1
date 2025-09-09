import { useEffect, useState } from 'react';
import gazpImg from '../assets/gazp.png';
import lukolImg from '../assets/lukol.png';
import mechelImg from '../assets/mechel.png';
import nikelImg from '../assets/nikel.png';
import novatekImg from '../assets/novatek.png';
import rosneftImg from '../assets/rosneft.png';
import sberImg from '../assets/sber.png';
import tbankImg from '../assets/tbank.png';
import vtbImg from '../assets/vtb.png';
import x5Img from '../assets/x5.png';
import { RobotItem } from '../types';

export const TICKER_TO_IMAGE: Record<string, string> = {
  GAZP: gazpImg,
  GMKN: nikelImg,
  LKOH: lukolImg,
  MTLR: mechelImg,
  NVTK: novatekImg,
  ROSN: rosneftImg,
  SBER: sberImg,
  T: tbankImg,
  VTB: vtbImg,
  X5: x5Img,
};

export const useRobotsData = () => {
  const [robots, setRobots] = useState<RobotItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch('https://gist.githubusercontent.com/nsdooris/3c70b682ee0a9d261b1b5f5e8be21378/raw');
      const data = (await response.json()) as { trading_robots: RobotItem[] };
      setRobots(data.trading_robots);
      setLoading(false);
    };

    fetchData();
  }, []);

  return { robots, loading };
};
