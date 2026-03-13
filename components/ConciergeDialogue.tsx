import { User, MessageSquareQuote } from 'lucide-react';

export default function ConciergeDialogue() {
  const conversations = [
    {
      intent: "Corporate Logistics",
      prompt: "I need a luxury car for a business meeting in Riyadh tomorrow. What's the process?",
      answer: "You can book an executive GMC SUV instantly via our WhatsApp. We offer corporate packages with formally dressed chauffeurs who know Riyadh's business district perfectly."
    },
    {
      intent: "Family Travel",
      prompt: "Can your chauffeur drive my family from Jeddah Airport to Makkah directly?",
      answer: "Yes, our large GMC SUVs comfortably fit families and their luggage. We provide direct VIP transfers from King Abdulaziz International Airport (JED) to your hotel in Makkah."
    },
    {
      intent: "Reliability",
      prompt: "Are your drivers reliable for late-night airport pickups in Saudi Arabia?",
      answer: "Absolutely. Our chauffeurs operate 24/7. We track your flight in real-time and your driver will be waiting at arrivals with a name board, even for delayed or late-night flights."
    }
  ];

  return (
    <section className="py-24 bg-gray-50 border-t border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-normal mb-6 text-black">Logistical Travel Support</h2>
          <p className="text-gray-500 text-lg">
            Direct logistical answers for your corporate travel, family transportation, and premium airport transfer requirements.
          </p>
        </div>

        <div className="space-y-8">
          {conversations.map((chat, idx) => (
            <div key={idx} className="bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100 flex flex-col gap-6 relative group hover:border-gold-accent transition-all duration-300">
              <span className="absolute top-4 right-6 text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] opacity-50 group-hover:opacity-100 transition-opacity">
                {chat.intent}
              </span>
              
              {/* User Prompt */}
              <div className="flex items-start gap-4">
                <div className="p-3 bg-gray-50 rounded-full text-gray-400 mt-1">
                  <User size={18} />
                </div>
                <div className="bg-gray-50 text-gray-700 p-5 rounded-2xl rounded-tl-sm w-full md:w-3/4 shadow-sm border border-gray-100">
                  <p className="font-medium text-lg italic">"{chat.prompt}"</p>
                </div>
              </div>

              {/* Service Agent Response */}
              <div className="flex items-start gap-4 flex-row-reverse">
                <div className="p-3 bg-gold-light rounded-full text-gold-accent mt-1">
                  <MessageSquareQuote size={18} />
                </div>
                <div className="bg-gold-light/20 text-black/80 p-5 rounded-2xl rounded-tr-sm w-full md:w-3/4 text-right shadow-sm border border-gold-accent/10">
                  <p className="font-medium text-lg leading-relaxed text-left">{chat.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
