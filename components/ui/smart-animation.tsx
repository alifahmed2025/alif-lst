"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Activity, Zap, TrendingUp, Clock, Wifi, Battery } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function Component() {
  const [isActive, setIsActive] = useState(false)
  const [counter, setCounter] = useState(0)
  const [progress, setProgress] = useState(0)
  const [currentTime, setCurrentTime] = useState(new Date())
  const [dataPoints, setDataPoints] = useState([45, 67, 89, 23, 56])
  const [batteryLevel, setBatteryLevel] = useState(85)

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)
    return () => clearInterval(timer)
  }, [])

  // Animate counter and progress when active
  useEffect(() => {
    if (isActive) {
      const counterInterval = setInterval(() => {
        setCounter((prev) => (prev < 100 ? prev + 1 : 0))
      }, 50)

      const progressInterval = setInterval(() => {
        setProgress((prev) => (prev < 100 ? prev + 2 : 0))
      }, 100)

      const dataInterval = setInterval(() => {
        setDataPoints((prev) => prev.map(() => Math.floor(Math.random() * 100)))
      }, 1500)

      const batteryInterval = setInterval(() => {
        setBatteryLevel((prev) => (prev > 20 ? prev - 1 : 100))
      }, 2000)

      return () => {
        clearInterval(counterInterval)
        clearInterval(progressInterval)
        clearInterval(dataInterval)
        clearInterval(batteryInterval)
      }
    }
  }, [isActive])

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString("en-US", {
      hour12: false,
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
    })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-8 flex items-center justify-center">
      <div className="w-full max-w-4xl space-y-6">
        {/* Header */}
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white mb-2">Smart Digital Animation</h1>
          <p className="text-gray-300">Real-time updates with smooth animations</p>

          <Button
            onClick={() => setIsActive(!isActive)}
            className={`px-8 py-3 rounded-full transition-all duration-300 ${
              isActive ? "bg-red-500 hover:bg-red-600 text-white" : "bg-green-500 hover:bg-green-600 text-white"
            }`}
          >
            {isActive ? "Stop Animation" : "Start Animation"}
          </Button>
        </motion.div>

        {/* Main Dashboard */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Digital Clock */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Clock className="text-blue-400" size={24} />
                <h3 className="text-white font-semibold">Digital Clock</h3>
              </div>
              <motion.div
                key={currentTime.getSeconds()}
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                className="text-3xl font-mono text-green-400 text-center"
              >
                {formatTime(currentTime)}
              </motion.div>
            </CardContent>
          </Card>

          {/* Smart Counter */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <TrendingUp className="text-green-400" size={24} />
                <h3 className="text-white font-semibold">Smart Counter</h3>
              </div>
              <motion.div
                key={counter}
                initial={{ scale: 1.2, color: "#10b981" }}
                animate={{ scale: 1, color: "#ffffff" }}
                transition={{ duration: 0.3 }}
                className="text-4xl font-bold text-center"
              >
                {counter.toString().padStart(3, "0")}
              </motion.div>
            </CardContent>
          </Card>

          {/* Battery Status */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Battery className="text-yellow-400" size={24} />
                <h3 className="text-white font-semibold">Battery</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Level</span>
                  <span className="text-white">{batteryLevel}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-3">
                  <motion.div
                    className={`h-3 rounded-full ${
                      batteryLevel > 50 ? "bg-green-500" : batteryLevel > 20 ? "bg-yellow-500" : "bg-red-500"
                    }`}
                    initial={{ width: 0 }}
                    animate={{ width: `${batteryLevel}%` }}
                    transition={{ duration: 0.5 }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Progress Bar */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Activity className="text-purple-400" size={24} />
                <h3 className="text-white font-semibold">Progress</h3>
              </div>
              <div className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="text-gray-300">Loading</span>
                  <span className="text-white">{progress}%</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <motion.div
                    className="bg-gradient-to-r from-purple-500 to-pink-500 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Network Status */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Wifi className="text-blue-400" size={24} />
                <h3 className="text-white font-semibold">Network</h3>
              </div>
              <div className="flex items-center justify-center">
                <motion.div
                  animate={{
                    scale: isActive ? [1, 1.2, 1] : 1,
                    opacity: isActive ? [1, 0.7, 1] : 1,
                  }}
                  transition={{
                    duration: 2,
                    repeat: isActive ? Number.POSITIVE_INFINITY : 0,
                  }}
                  className="text-green-400 text-lg font-semibold"
                >
                  Connected
                </motion.div>
              </div>
            </CardContent>
          </Card>

          {/* Data Visualization */}
          <Card className="bg-black/20 backdrop-blur-sm border-gray-700">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Zap className="text-orange-400" size={24} />
                <h3 className="text-white font-semibold">Live Data</h3>
              </div>
              <div className="flex items-end justify-between h-16 gap-1">
                {dataPoints.map((point, index) => (
                  <motion.div
                    key={index}
                    className="bg-gradient-to-t from-orange-500 to-yellow-400 rounded-t"
                    style={{ width: "16%" }}
                    initial={{ height: 0 }}
                    animate={{ height: `${point}%` }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  />
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Status Indicators */}
        <motion.div
          className="flex justify-center gap-4"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ scale: 0, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0, opacity: 0 }}
                className="flex items-center gap-2 bg-green-500/20 px-4 py-2 rounded-full border border-green-500/30"
              >
                <motion.div
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Number.POSITIVE_INFINITY }}
                  className="w-2 h-2 bg-green-400 rounded-full"
                />
                <span className="text-green-400 text-sm font-medium">System Active</span>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  )
}
