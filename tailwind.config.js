/** @type {import('tailwindcss').Config} */
export default {
	darkMode: ["class"],
	content: [
		"./index.html",
		"./src/**/*.{js,ts,jsx,tsx}",
	],
	theme: {
    	fontFamily: {
    		Manrope: ["Manrope", "sans-serif"],
    		MuseoModerno: ["MuseoModerno", "sans-serif"]
    	},
    	extend: {
    		cursor: {
    			default: 'url(../src/assets/cursor.png))',
    			pointer: 'url(../src/assets/cursor.png))'
    		},
    		colors: {
    			shade_1: '#916CE7',
    			shade_2: '#050505',
    			shade_3: '#1E1E1E',
    			shade_4: '#282828',
    			shade_5: '#CCCCCC',
    			shade_6: '#FFFFFF',
    			shade_7: '#101010',
    			shade_8: '#141414',
    			background: 'hsl(var(--background))',
    			foreground: 'hsl(var(--foreground))',
    			card: {
    				DEFAULT: 'hsl(var(--card))',
    				foreground: 'hsl(var(--card-foreground))'
    			},
    			popover: {
    				DEFAULT: 'hsl(var(--popover))',
    				foreground: 'hsl(var(--popover-foreground))'
    			},
    			primary: {
    				DEFAULT: 'hsl(var(--primary))',
    				foreground: 'hsl(var(--primary-foreground))'
    			},
    			secondary: {
    				DEFAULT: 'hsl(var(--secondary))',
    				foreground: 'hsl(var(--secondary-foreground))'
    			},
    			muted: {
    				DEFAULT: 'hsl(var(--muted))',
    				foreground: 'hsl(var(--muted-foreground))'
    			},
    			accent: {
    				DEFAULT: 'hsl(var(--accent))',
    				foreground: 'hsl(var(--accent-foreground))'
    			},
    			destructive: {
    				DEFAULT: 'hsl(var(--destructive))',
    				foreground: 'hsl(var(--destructive-foreground))'
    			},
    			border: 'hsl(var(--border))',
    			input: 'hsl(var(--input))',
    			ring: 'hsl(var(--ring))',
    			chart: {
    				'1': 'hsl(var(--chart-1))',
    				'2': 'hsl(var(--chart-2))',
    				'3': 'hsl(var(--chart-3))',
    				'4': 'hsl(var(--chart-4))',
    				'5': 'hsl(var(--chart-5))'
    			}
    		},
    		keyframes: {
    			slideAndDissolve: {
    				'0%': {
    					opacity: '0',
    					transform: 'translateX(-400%)'
    				},
    				'100%': {
    					opacity: '1',
    					transform: 'translateX(0) rotate(45deg)'
    				}
    			}
    		},
    		animation: {
    			ping: 'ping 1.3s linear infinite',
    			slideAndDissolve: 'slideAndDissolve 2s ease-in-out'
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },
	plugins: [
		// require('tailwindcss-animation-iteration-count'),
		require('tailwindcss-animate')
	  ],

	//   variants: {
	// 	extend: {
	// 	  animationIterationCount: ['responsive'],
	// 	},
	//   },
}