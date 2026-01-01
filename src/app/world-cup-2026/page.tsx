import Container from '@/components/layout/Container';
import Button from '@/components/ui/Button';
import Card from '@/components/ui/Card';

export default function WorldCupPage() {
  return (
    <div className="bg-white">
      <section className="border-b border-black/10 bg-[rgb(var(--smg-soft))]">
        <Container className="py-10">
          <h1 className="text-3xl font-black tracking-tight">World Cup 2026</h1>
          <p className="mt-2 text-sm text-black/70">
            Coverage, culture, music and trivia across USA • Mexico • Canada.
          </p>
          <div className="mt-5 flex gap-2">
            <Button>View Latest News</Button>
            <Button variant="secondary">Try Trivia</Button>
          </div>
        </Container>
      </section>

      <Container className="py-10">
        <div className="grid gap-4 md:grid-cols-3">
          {['News', 'Host Cities', 'Countdown'].map((t) => (
            <Card key={t} className="p-6">
              <div className="text-sm font-extrabold">{t}</div>
              <div className="mt-2 text-sm text-black/70">Section placeholder.</div>
              <div className="mt-4">
                <Button variant="secondary" className="w-full">
                  View
                </Button>
              </div>
            </Card>
          ))}
        </div>
      </Container>
    </div>
  );
}
