const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-background">
      <div className="mx-auto flex max-w-7xl flex-col items-start justify-between gap-3 px-6 py-6 text-sm sm:flex-row sm:items-center">
        <div>
          <p className="font-display text-base font-bold text-foreground">
            CS Mastery
          </p>
          <p className="text-muted-foreground">
            &copy; {year} CS Mastery. Cambridge IGCSE is a trademark of Cambridge University Press
            &amp; Assessment.
          </p>
        </div>
        <nav className="flex flex-wrap gap-x-6 gap-y-2 text-muted-foreground">
          <a href="#" className="hover:text-foreground">Privacy Policy</a>
          <a href="#" className="hover:text-foreground">Terms of Service</a>
          <a href="#" className="hover:text-foreground">Syllabus Overview</a>
          <a href="#" className="hover:text-foreground">Contact Support</a>
        </nav>
      </div>
    </footer>
  );
};

export default Footer;