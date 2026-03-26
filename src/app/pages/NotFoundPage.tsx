import { Link } from 'react-router-dom'

export function NotFoundPage() {
  return (
    <section className="section">
      <div className="container">
        <div className="glass mx-auto max-w-2xl rounded-2xl p-10 text-center">
          <div className="text-xs font-medium tracking-[0.22em] text-zinc-500">404</div>
          <div className="mt-3 text-2xl font-semibold text-white">Page introuvable</div>
          <p className="mt-3 text-sm text-zinc-400">
            Le lien est peut-être incorrect ou la page a été déplacée.
          </p>
          <div className="mt-6">
            <Link className="btn-primary" to="/">
              Retour à l’accueil
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

