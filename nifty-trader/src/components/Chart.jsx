import { useEffect, useRef } from "react";

export default function Chart() {
  const chartRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "/charting_library/charting_library.js";
    script.async = true;

    script.onload = () => {
      const widget = new window.TradingView.widget({
        container_id: chartRef.current,
        width: "100%",
        height: "100%",
        symbol: "NSE:NIFTY",
        interval: "5",
        timezone: "Asia/Kolkata",
        theme: "dark",
        style: "1",
        locale: "en",
        enable_publishing: false,
        hide_side_toolbar: false,
        allow_symbol_change: false,
      });

      widget.onChartReady(() => {
        const chart = widget.chart();

        // ENTRY LINE
        const entryLine = chart.createOrderLine()
          .setPrice(22000)
          .setText("ENTRY")
          .setQuantity("1")
          .setLineColor("blue");

        // STOP LOSS
        const slLine = chart.createOrderLine()
          .setPrice(21950)
          .setText("SL")
          .setLineColor("red");

        // TARGET
        const targetLine = chart.createOrderLine()
          .setPrice(22100)
          .setText("TARGET")
          .setLineColor("green");

        // DRAG EVENTS
        entryLine.onMove(() => {
          console.log("Entry moved:", entryLine.getPrice());
        });

        slLine.onMove(() => {
          console.log("SL moved:", slLine.getPrice());
        });

        targetLine.onMove(() => {
          console.log("Target moved:", targetLine.getPrice());
        });
      });
    };

    document.body.appendChild(script);
  }, []);

  return <div ref={chartRef} className="w-full h-full" />;
}