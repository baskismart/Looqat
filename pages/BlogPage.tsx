
import React from 'react';
import { Link } from 'react-router-dom';

export interface Post {
  id: number;
  title: string;
  category: string;
  description: string;
  post_date: string;
  image_url: string;
  reading_time: string;
  content?: string;
}

export const BLOG_POSTS: Post[] = [
    {
        id: 1,
        title: "Hydration Hacks for Gym Rats",
        category: "Performance",
        description: "Maximize your gains by optimizing your water intake before, during, and after training.",
        post_date: "2023-10-15",
        image_url: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
        reading_time: "5 min",
        content: `
            <p class="text-xl md:text-2xl text-white font-medium mb-10 leading-relaxed">
              Whether you’re lifting, running, or doing HIIT, your performance depends on one simple thing — <strong>how well you stay hydrated.</strong>
            </p>
            <p>Dehydration doesn’t just make you thirsty — it reduces your strength, focus, and stamina. Even a 2% drop in hydration can cut performance by 10–15%.</p>
            <p>If you’re serious about your fitness game, staying hydrated isn’t optional — it’s a performance hack. Here’s how to do it smarter, not harder.</p>

            <h2>1. Start Hydration Before You Start</h2>
            <p>Most people start sipping water only after their first set. Big mistake. Your muscles, joints, and cells need hydration before they face stress.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Drink 300–500 ml of water 30–45 minutes before your workout. This preloads your body so you start strong, not sluggish.</p>
            </div>

            <h2>2. Sip, Don’t Gulp During Sets</h2>
            <p>Chugging too much water mid-workout can slow digestion and make you feel bloated. Instead, sip small amounts frequently.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Aim for 150–200 ml every 15–20 minutes during your session. This keeps your hydration levels steady and your energy balanced.</p>
            </div>

            <h2>3. Add Electrolytes (Smartly)</h2>
            <p>Sweating drains more than just water — you lose sodium, potassium, and magnesium too. That’s why electrolytes are key for endurance workouts or long gym sessions.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Mix a natural electrolyte drink or coconut water into your post-workout hydration. Or just add a pinch of pink Himalayan salt to your bottle — it works wonders!</p>
            </div>

            <h2>4. Keep It Cold for Performance</h2>
            <p>Cold water does more than refresh you — it helps lower your core body temperature, keeping fatigue away.</p>
            
             <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Use an insulated gym bottle like the <strong>LOOQAT Premium Quencher</strong> that keeps water cold for over 11 hours. You’ll love that icy sip between heavy sets.</p>
            </div>

            <h2>5. Rehydrate Immediately After</h2>
            <p>Your muscles are like sponges after a workout — they absorb nutrients and fluids faster. So don’t wait until you’re home.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Refill your bottle right after your last set and drink at least 500 ml within 30 minutes. This helps recovery and reduces soreness.</p>
            </div>
        `
    },
    {
        id: 2,
        title: "Why Staying Cool Boosts Workout Performance",
        category: "Science",
        description: "The science behind cold water and how it helps regulate body temperature during intense sets.",
        post_date: "2023-10-22",
        image_url: "https://images.unsplash.com/photo-1599058945522-28d584b6f0ff?q=80&w=2069&auto=format&fit=crop",
        reading_time: "4 min",
        content: `
            <p class="text-xl md:text-2xl text-white font-medium mb-10 leading-relaxed">
              Ever noticed how your energy drops faster when the gym feels stuffy or hot? That’s not just in your head — it’s biology.
            </p>
            <p>When you work out, your muscles generate heat. If your body can’t cool down fast enough, your core temperature rises, and your body starts redirecting blood from your muscles to your skin to release that heat.</p>
            <p>The result? Less oxygen and nutrients reach your muscles — and your performance dips.</p>
            <p>So staying cool isn’t about comfort; it’s about power, endurance, and focus.</p>

            <h2>1. Cooling Helps You Train Longer</h2>
            <p>Every degree your core temperature increases can reduce endurance by up to 10%. By keeping yourself cool, you maintain optimal blood flow and delay fatigue.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Sip cold water between sets instead of plain room-temperature water. It lowers your internal temperature and lets you train longer and harder.</p>
            </div>

            <h2>2. Cold Hydration Improves Strength Output</h2>
            <p>Studies show that athletes who drink cold water during resistance training can maintain higher power output and better recovery between sets.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Fill your bottle with chilled water or electrolyte mix before you hit the gym. Use an insulated bottle like the LOOQAT Premium Quencher that keeps your drink cold for up to 11 hours — so every sip is refreshingly cool, even mid-workout.</p>
            </div>

            <h2>3. Staying Cool Keeps Your Focus Sharp</h2>
            <p>Overheating triggers the brain’s fatigue response, making your body feel more tired than it actually is. Cool water and a stable temperature keep your mental clarity intact, helping you lift heavier, run faster, and stay locked in.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Take small sips between intense sets — it keeps your energy steady without that dizzy, overheated feeling.</p>
            </div>

            <h2>4. Cooling Aids Faster Recovery</h2>
            <p>Your recovery starts the moment you stop training. Cooling the body right after workouts helps:</p>
            <ul>
                <li>Reduce muscle inflammation</li>
                <li>Lower post-workout heart rate</li>
                <li>Prevent cramps and fatigue</li>
            </ul>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">After your final set, drink a cold hydration mix and rest for 5–10 minutes while rehydrating. It helps your body return to normal faster, so you’re ready to hit your next session stronger.</p>
            </div>

            <h2>5. Cool Isn’t Just Temperature — It’s a Mindset</h2>
            <p>Let’s be real — the gym is more than physical. It’s about confidence. When you walk in with your gear on point, hydration sorted, and performance locked in, you carry a cool energy that separates you from the rest.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">✅ The Hack</span>
                <p class="m-0 text-white font-medium text-lg">Carry your LOOQAT — the premium quencher that looks good, feels premium, and performs like your best gym partner. It’s your reminder to stay cool, focused, and consistent.</p>
            </div>
        `
    },
    {
        id: 3,
        title: "The Perfect Gym Accessory You Didn’t Know You Needed",
        category: "Lifestyle",
        description: "Upgrade your gym aesthetics and utility with the one tool you use every single session.",
        post_date: "2023-11-05",
        image_url: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
        reading_time: "3 min",
        content: `
            <h2 class="mt-0">🧠 The Little Thing That Makes a Big Difference</h2>
            <p class="text-xl md:text-2xl text-white font-medium mb-10 leading-relaxed">
              We often chase the big stuff — the perfect training plan, the best protein, the newest gadget. But small habits like hydration are what truly move the needle.
            </p>
            <p>Because when you’re hydrated, you:</p>
            <ul>
                <li>Lift better</li>
                <li>Recover faster</li>
                <li>Focus longer</li>
                <li>And honestly, just feel better</li>
            </ul>
            <p>That’s what inspired us to design LOOQAT — a premium bottle that doesn’t just hold water, it fuels performance.</p>

            <h2>❄️ Keeps It Cool. Literally.</h2>
            <p>The moment you take that first icy sip between your sets — everything feels different. Your energy resets. Your focus sharpens.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">😎 Stay Fresh</span>
                <p class="m-0 text-white font-medium text-lg">LOOQAT’s double-wall insulation keeps your water cold for more than 11 hours (and hot for 7). So whether you’re crushing your morning session or surviving a 2-hour leg day, it’s always refreshingly cool — just like you.</p>
            </div>

            <h2>🖤 Made for the Grind, Styled for Life</h2>
            <p>This isn’t your average plastic bottle. It’s black, bold, leak-proof, and built to last.</p>
            <p>Designed to fit in your car holder, gym bag, or desk setup — it looks good everywhere. Because who said your hydration gear can’t match your vibe?</p>

            <h2>💪 Strong Grip. No Slip.</h2>
            <p>We know how it feels when your hands are sweaty mid-set. That’s why the LOOQAT Quencher has a matte, sweat-proof finish — so it stays firm in your hand, no matter how intense your workout gets.</p>
            <p>Small detail, huge difference.</p>

            <h2>🌍 Not Just About You — It’s About the Planet Too</h2>
            <p>Each LOOQAT bottle replaces hundreds of single-use plastics every year. So while you’re working on yourself, you’re also doing something good for the planet.</p>
            
            <div class="my-10 p-8 bg-[#151515] border-l-4 border-white rounded-r-lg shadow-lg">
                <span class="block text-xs font-black uppercase tracking-widest text-white mb-3">💚 Guilt-Free Flex</span>
                <p class="m-0 text-white font-medium text-lg">That’s what we call a guilt-free flex.</p>
            </div>

            <h2>🚀 The Accessory You’ll Never Leave Behind</h2>
            <p>Once you start carrying it, it becomes part of your gym routine — like your towel or your playlist. You’ll find yourself bringing it to the gym, to work, on drives, even on weekend hikes.</p>
            <p>Because when something feels good, looks good, and performs well, it just sticks.</p>
        `
    }
];

const BlogPage: React.FC = () => {
  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-[#0B0B0B] pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto divide-y-2 divide-[#333333] lg:max-w-7xl">
        <div>
          <h2 className="text-3xl font-black uppercase tracking-tighter text-white sm:text-5xl">The Journal</h2>
          <p className="mt-4 text-xl text-[#a0a0a0] max-w-2xl font-body">
            Insights on training, recovery, and the gym lifestyle.
          </p>
        </div>
        <div className="mt-16 pt-12">
            <div className="grid gap-16 lg:grid-cols-3 lg:gap-x-8 lg:gap-y-12">
            {BLOG_POSTS.map((post) => (
                <div key={post.title} className="flex flex-col justify-between rounded-sm overflow-hidden bg-[#121212] border border-gray-900 transition-all duration-300 hover:border-gray-700 hover:scale-[1.02] group shadow-xl">
                <Link to={`/blog/${post.id}`} className="block h-full flex flex-col">
                    <div className="flex-shrink-0 relative overflow-hidden h-64">
                        <div className="absolute top-4 left-4 bg-black/80 backdrop-blur-sm px-3 py-1 z-10 border border-white/10">
                            <span className="text-[10px] font-bold text-white uppercase tracking-widest">{post.category}</span>
                        </div>
                        <img className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src={post.image_url} alt={post.title} />
                    </div>
                    <div className="flex-1 p-8 flex flex-col justify-between">
                    <div className="flex-1">
                        <div className="block">
                        <h3 className="text-xl font-black uppercase text-white tracking-wide group-hover:text-gray-300 transition-colors line-clamp-2">{post.title}</h3>
                        <p className="mt-4 text-sm text-[#a0a0a0] line-clamp-3 font-body leading-relaxed">{post.description}</p>
                        </div>
                    </div>
                    <div className="mt-6 flex items-center border-t border-gray-800 pt-4">
                        <div className="flex space-x-1 text-xs text-[#666] uppercase font-bold tracking-widest">
                        <time dateTime={post.post_date}>{formatDate(post.post_date)}</time>
                        <span aria-hidden="true" className="mx-2">&middot;</span>
                        <span>{post.reading_time} READ</span>
                        </div>
                    </div>
                    </div>
                </Link>
                </div>
            ))}
            </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
