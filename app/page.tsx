import Header from "@/components/Header/Header";
import { useMemo } from "react";
import { redirect } from 'next/navigation';

export default function Home() {
  redirect('./movie')
}
