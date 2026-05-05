"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, ArrowRight, Check } from "lucide-react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { cn } from "@/lib/cn";

const schema = z.object({
  name: z.string().min(2, "Bitte gib deinen Namen an."),
  business: z.string().min(2, "Bitte gib den Namen deines Geschäfts an."),
  address: z.string().min(5, "Bitte gib deine Lieferadresse an."),
  zip: z.string().regex(/^\d{4,5}$/, "Bitte gib eine gültige PLZ an."),
  experience: z.enum(["keine", "wenig", "viel"]),
  purpose: z.string().min(3, "Bitte beschreibe kurz den Einsatzzweck."),
  sort: z.enum(["bourbon", "pompona", "beides"]),
  consent: z.literal(true, { message: "Bitte Datenschutz zustimmen." }),
});

type FormValues = z.infer<typeof schema>;

type Step = {
  key: keyof FormValues | "review";
  label: string;
  question: string;
  hint?: string;
};

const steps: Step[] = [
  { key: "name", label: "01", question: "Wie dürfen wir dich ansprechen?", hint: "Vor- und Nachname." },
  { key: "business", label: "02", question: "Für welches Geschäft bestellst du?" },
  { key: "address", label: "03", question: "Wohin dürfen wir liefern?", hint: "Straße und Hausnummer." },
  { key: "zip", label: "04", question: "Deine Postleitzahl?" },
  { key: "experience", label: "05", question: "Hast du bereits Erfahrung mit Madagaskar-Vanille?" },
  { key: "purpose", label: "06", question: "Wofür möchtest du die Vanille einsetzen?", hint: "Patisserie, Eis, Getränke …" },
  { key: "sort", label: "07", question: "Welche Sorte interessiert dich?" },
  { key: "consent", label: "08", question: "Datenschutz", hint: "Wir benötigen deine Einwilligung." },
];

export function ContactForm() {
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const {
    register,
    handleSubmit,
    trigger,
    formState: { errors },
    watch,
    setValue,
  } = useForm<FormValues>({
    resolver: zodResolver(schema),
    mode: "onChange",
  });

  const onSubmit: SubmitHandler<FormValues> = async () => {
    await new Promise((r) => setTimeout(r, 500));
    setDone(true);
  };

  async function next() {
    const field = steps[step].key as keyof FormValues;
    const ok = await trigger(field);
    if (!ok) return;
    if (step < steps.length - 1) setStep(step + 1);
    else handleSubmit(onSubmit)();
  }

  const progress = ((step + 1) / steps.length) * 100;
  const current = steps[step];

  return (
    <section
      id="kontaktformular"
      className="relative py-section bg-cream-100 dark:bg-cocoa-900 scroll-mt-24 md:scroll-mt-28"
    >
      <div className="container-page">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Kostenlose Probe</p>
            <h2 className="mt-5 font-display font-semibold text-display-lg text-balance max-w-[14ch]">
              Überzeug dich. <span className="italic font-serif font-light text-amber-500">Gratis.</span>
            </h2>
            <p className="mt-6 max-w-prose text-lg leading-relaxed text-cocoa-800/80 dark:text-cream-100/80">
              Wir schicken dir eine Auswahl unserer Vanille – damit du Aroma, Feuchtigkeit und Qualität in deiner Küche testen kannst, bevor du bestellst.
            </p>
          </div>

          <div className="lg:col-span-7">
            <div className="relative rounded-[2rem] bg-paper dark:bg-cocoa-950 p-8 md:p-12 shadow-2xl shadow-cocoa-700/10 border border-cocoa-700/5 dark:border-cream-200/5">
              {/* Progress */}
              <div className="flex items-center justify-between mb-8">
                <span className="font-mono text-xs tracking-wider text-cocoa-700/60 dark:text-cream-200/60">
                  {done ? "ABGESENDET" : `SCHRITT ${step + 1} / ${steps.length}`}
                </span>
                <div className="flex-1 mx-6 h-px bg-cocoa-700/10 dark:bg-cream-200/10 overflow-hidden">
                  <motion.div
                    className="h-full bg-amber-500 origin-left"
                    animate={{ scaleX: done ? 1 : progress / 100 }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                  />
                </div>
              </div>

              {!done ? (
                <form onSubmit={(e) => { e.preventDefault(); next(); }}>
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={step}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -20 }}
                      transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <label className="block">
                        <span className="font-display text-2xl md:text-3xl font-semibold text-cocoa-900 dark:text-cream-50 text-balance">
                          {current.question}
                        </span>
                        {current.hint && (
                          <span className="mt-2 block text-sm text-cocoa-700/70 dark:text-cream-200/70">{current.hint}</span>
                        )}
                      </label>

                      <div className="mt-6">
                        {current.key === "experience" && (
                          <Choice
                            options={[
                              { v: "keine", l: "Noch keine" },
                              { v: "wenig", l: "Ein wenig" },
                              { v: "viel", l: "Regelmäßig" },
                            ]}
                            value={watch("experience")}
                            onChange={(v) => setValue("experience", v as FormValues["experience"], { shouldValidate: true })}
                          />
                        )}
                        {current.key === "sort" && (
                          <Choice
                            options={[
                              { v: "bourbon", l: "Bourbon" },
                              { v: "pompona", l: "Pompona" },
                              { v: "beides", l: "Beides" },
                            ]}
                            value={watch("sort")}
                            onChange={(v) => setValue("sort", v as FormValues["sort"], { shouldValidate: true })}
                          />
                        )}
                        {current.key === "consent" && (
                          <label className="flex items-start gap-4 cursor-pointer group">
                            <input
                              type="checkbox"
                              {...register("consent")}
                              className="peer sr-only"
                            />
                            <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-md border border-cocoa-700/30 dark:border-cream-200/30 peer-checked:bg-amber-500 peer-checked:border-amber-500 transition-colors">
                              <Check size={14} className="opacity-0 peer-checked:opacity-100 text-cocoa-900" />
                            </span>
                            <span className="text-sm leading-relaxed text-cocoa-800 dark:text-cream-100">
                              Ich habe die <a href="/datenschutz" className="underline underline-offset-4">Datenschutzerklärung</a> gelesen und bin einverstanden, dass meine Angaben zur Kontaktaufnahme gespeichert werden.
                            </span>
                          </label>
                        )}
                        {["name", "business", "address", "zip", "purpose"].includes(current.key as string) && (
                          <input
                            {...register(current.key as keyof FormValues)}
                            autoFocus={step > 0}
                            type={current.key === "zip" ? "text" : "text"}
                            inputMode={current.key === "zip" ? "numeric" : "text"}
                            placeholder={
                              current.key === "name" ? "Maria Muster" :
                              current.key === "business" ? "Patisserie Muster" :
                              current.key === "address" ? "Musterstr. 1, Musterstadt" :
                              current.key === "zip" ? "80331" :
                              "z. B. Eispatisserie"
                            }
                            className="w-full bg-transparent border-b border-cocoa-700/20 dark:border-cream-200/20 focus:border-amber-500 outline-none py-4 text-xl md:text-2xl font-display text-cocoa-900 dark:text-cream-50 placeholder:text-cocoa-700/30 dark:placeholder:text-cream-200/30 transition-colors"
                          />
                        )}
                      </div>

                      {errors[current.key as keyof FormValues] && (
                        <motion.p
                          initial={{ opacity: 0, y: 4 }}
                          animate={{ opacity: 1, y: 0 }}
                          className="mt-4 text-sm text-amber-600 dark:text-amber-400"
                        >
                          {errors[current.key as keyof FormValues]?.message as string}
                        </motion.p>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  <div className="mt-10 flex items-center justify-between">
                    <button
                      type="button"
                      onClick={() => setStep(Math.max(0, step - 1))}
                      disabled={step === 0}
                      className="inline-flex items-center gap-2 text-sm text-cocoa-800 dark:text-cream-200 hover:text-amber-500 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                    >
                      <ArrowLeft size={16} /> Zurück
                    </button>
                    <button type="submit" className="btn-primary bg-amber-500 text-cocoa-900 hover:bg-amber-400 inline-flex items-center gap-2">
                      {step === steps.length - 1 ? "Absenden" : "Weiter"} <ArrowRight size={16} />
                    </button>
                  </div>
                </form>
              ) : (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  className="py-10 text-center"
                >
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                    className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-amber-500 text-cocoa-900"
                  >
                    <Check size={28} />
                  </motion.div>
                  <h3 className="font-display font-semibold text-3xl text-balance">Danke.</h3>
                  <p className="mt-3 max-w-md mx-auto text-cocoa-800/80 dark:text-cream-100/80">
                    Wir haben deine Anfrage erhalten und melden uns innerhalb von 2 Werktagen mit einer Probe.
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Choice({
  options,
  value,
  onChange,
}: {
  options: { v: string; l: string }[];
  value?: string;
  onChange: (v: string) => void;
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
      {options.map((opt) => (
        <button
          key={opt.v}
          type="button"
          onClick={() => onChange(opt.v)}
          className={cn(
            "rounded-2xl border px-5 py-5 text-left transition-all duration-500 ease-apple",
            value === opt.v
              ? "border-amber-500 bg-amber-500/10 text-cocoa-900 dark:text-cream-50"
              : "border-cocoa-700/15 dark:border-cream-200/15 text-cocoa-800 dark:text-cream-100 hover:border-cocoa-700/40 dark:hover:border-cream-200/40"
          )}
        >
          <span className="font-display text-lg font-medium">{opt.l}</span>
        </button>
      ))}
    </div>
  );
}
