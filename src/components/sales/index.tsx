import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { DollarSign } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@radix-ui/react-avatar";

export default function Sales() {
  return (
    <Card className="flex-1">
      <CardHeader>
        <div className="flex items-center justify-center">
          <CardTitle className="text-lg sm:text-xl text-gray-800">
            Últimos clientes
          </CardTitle>
          <DollarSign className="ml-auto w-4 h-4" />
        </div>
        <CardDescription>Novos clientes nas últimas 24 horas</CardDescription>
      </CardHeader>
      <CardContent>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-12 h-12">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/Eduardo-DevJs.png"
            />
            <AvatarFallback>Dudu</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Eduardo de Oliveira
            </p>
            <span className="text-[12px] sm:texrt-sm text-gray-400">
              dudev2001@gmail.com
            </span>
          </div>
        </article>
        <article className="flex items-center gap-2 border-b py-2">
          <Avatar className="w-12 h-12">
            <AvatarImage
              className="rounded-full"
              src="https://github.com/Eduardo-DevJs.png"
            />
            <AvatarFallback>Dudu</AvatarFallback>
          </Avatar>
          <div>
            <p className="text-sm sm:text-base font-semibold">
              Eduardo de Oliveira
            </p>
            <span className="text-[12px] sm:texrt-sm text-gray-400">
              dudev2001@gmail.com
            </span>
          </div>
        </article>
      </CardContent>
    </Card>
  );
}
