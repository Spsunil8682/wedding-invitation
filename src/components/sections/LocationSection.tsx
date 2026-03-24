"use client";

import Card from "@/components/ui/Card";
import Button from "@/components/ui/Button";

export default function LocationSection() {
  return (
    <section className="py-16 px-4 bg-gradient-to-br from-rose-50 to-pink-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4 font-serif">
            Location & Travel
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Find us at our beautiful village location with convenient travel
            options
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Village Location */}
          <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">📍</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Village Location
              </h3>
              <p className="text-gray-600 mb-4">Boliya Bujurg Village</p>
              <Button
                onClick={() =>
                  window.open(
                    "https://maps.app.goo.gl/zwv4x9xtnc2k38JV6",
                    "_blank",
                  )
                }
                className="w-full bg-rose-600 hover:bg-rose-700 text-white"
              >
                View on Map
              </Button>
            </div>
          </Card>

          {/* Railway Stations */}
          <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🚂</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Railway Stations
              </h3>
              <div className="space-y-3 mb-4">
                <div>
                  <p className="text-gray-700 font-medium">
                    Nearest: Bhawani-Mandi
                  </p>
                  <Button
                    onClick={() =>
                      window.open(
                        "https://maps.app.goo.gl/2JKyxMUDdzSaJcSeA?g_st=ic",
                        "_blank",
                      )
                    }
                    className="mt-2 w-full bg-blue-600 hover:bg-blue-700 text-white text-sm"
                    size="sm"
                  >
                    View on Map
                  </Button>
                </div>
                <div className="pt-2 border-gray-200">
                  <p className="text-gray-700 font-medium mt-4">
                    Major: Kota Junction
                  </p>
                </div>
              </div>
            </div>
          </Card>

          {/* Airports */}
          <Card className="p-6 bg-white shadow-lg hover:shadow-xl transition-shadow duration-300 md:col-span-2 lg:col-span-1">
            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">✈️</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                Nearest Airports
              </h3>
              <div className="space-y-2 text-gray-600 mb-4">
                <p>Jaipur Airport</p>
                <p>Indore Airport</p>
              </div>
              <p className="text-sm text-gray-500">
                Choose the most convenient airport for your travel
              </p>
            </div>
          </Card>
        </div>

        {/* Additional Travel Information */}
        <div className="mt-12 text-center">
          <Card className="p-8 bg-white shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4">
              Travel Information
            </h3>
            <div className="grid md:grid-cols-2 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">By Train:</h4>
                <p className="text-gray-600 text-sm">
                  Bhanwarmandi is the nearest railway station. Kota Junction is
                  the major railway hub with better connectivity. Local
                  transportation is available from both stations to reach the
                  village.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-gray-700 mb-2">By Air:</h4>
                <p className="text-gray-600 text-sm">
                  Jaipur and Indore airports are the nearest options. Train
                  services and buses are available from both airports.
                </p>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
