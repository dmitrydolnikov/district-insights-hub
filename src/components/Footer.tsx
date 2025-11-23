const Footer = () => {
  return (
    <footer className="mt-auto border-t bg-muted/30">
      <div className="container max-w-7xl mx-auto py-3 px-4">
        <div className="text-center space-y-2">
          <p className="text-sm text-muted-foreground">
            This is an independent civic-tech prototype created for demonstration purposes using synthetic and publicly sourced data.
          </p>
          <p className="text-sm font-medium text-foreground">
            Not affiliated with or endorsed by any elected official or government entity.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

