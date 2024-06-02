import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA, VitePWAOptions } from 'vite-plugin-pwa'


const manifestForPlugin: Partial<VitePWAOptions> = {
	registerType: "prompt",
	includeAssets: ["favicon.ico", "apple-touch-icon.png", "masked-icon.svg"],
	manifest: {
		name: "Varthakal",
		short_name: "Varthakal",
		description: "An app that can show weather forecast for your city.",
		icons: [
			{
				src: "/images/icons-512.png",
				sizes: "521x512",
				type: "image/png",
			},
      {
				src: "/images/android-chrome-192x192.png",
				sizes: "256x256",
				type: "image/png",
			},
			{
				src: "/images/android-chrome-512x512.png",
				sizes: "256x256",
				type: "image/png",
			},
			{
				src: "/images/apple-touch-icon.png",
				sizes: "256x256",
				type: "image/png",
				purpose: "apple touch icon",
			},
			{
				src: "/images/maskable_icon.png",
				sizes: "256x256",
				type: "image/png",
				purpose: "any maskable",
			},
		],
		theme_color: "#f12345",
		background_color: "#e8ebf2",
		display: "standalone",
		scope: "/",
		start_url: "/",
		orientation: "portrait",
	},
  devOptions: {
    enabled: true
  }
};

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(),
    VitePWA(manifestForPlugin)
  ],
})
