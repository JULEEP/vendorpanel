import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useState } from "react";
import { FaAndroid } from "react-icons/fa";

export default function AppSettings() {
  const [latitude, setLatitude] = useState("23.829312399999996");
  const [longitude, setLongitude] = useState("90.42076019999999");
  const [range, setRange] = useState("200");
  const [apiKey, setApiKey] = useState("Authorization: Key=AAAACc-ZrPQ:APA91bH0tBWM");

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-4 bg-gray-100">
      <Card className="w-full max-w-2xl p-6 bg-white shadow-lg rounded-2xl">
        <h2 className="mb-4 text-2xl font-semibold text-gray-800">Edit Apps Setting</h2>
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex flex-col items-center">
            <p className="text-sm font-medium text-gray-600">Attendance QR code</p>
            <img
              src="https://via.placeholder.com/150" 
              alt="QR Code"
              className="w-32 h-32 mt-2 border rounded-lg"
            />
          </div>
          <div className="flex flex-col items-center">
            <p className="text-lg font-semibold text-gray-800">Download Mobile Apps From Play Store</p>
            <FaAndroid className="text-6xl text-blue-500" />
          </div>
        </div>

        <div className="mt-6 space-y-4">
          <Input
            label="Latitude"
            value={latitude}
            onChange={(e) => setLatitude(e.target.value)}
            className="w-full"
          />
          <Input
            label="Longitude"
            value={longitude}
            onChange={(e) => setLongitude(e.target.value)}
            className="w-full"
          />
          <Input
            label="Acceptable Range"
            value={range}
            onChange={(e) => setRange(e.target.value)}
            className="w-full"
          />
          <Input
            label="Google API Auth Key"
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="w-full text-gray-500"
            readOnly
          />
        </div>

        <div className="flex justify-end mt-4">
          <Button className="text-white bg-green-500 hover:bg-green-600">Submit</Button>
        </div>
      </Card>

      <p className="mt-6 text-sm text-center text-gray-600">
        To enable mobile apps addons for your business, please contact at: <br />
        <span className="text-red-500">business@bdtask.com</span>, Skype: <span className="font-semibold">bdtask</span>
      </p>
    </div>
  );
}
