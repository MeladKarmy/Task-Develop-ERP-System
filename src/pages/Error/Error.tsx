import { Link, useRouteError } from "react-router-dom";

import { Button } from "@/components/ui/button";

const Error = () => {
  const error = useRouteError();
  console.log("🚀 ~ Error ~ error:", error);

  return (
    <section>
      <div className="container mx-auto mt-20 flex flex-col items-center justify-center text-secondary-400">
        {/* <img src="/svg/500.svg" className="size-96" /> */}
        <p>We apologize for the technical difficulties.</p>
        <p>Thank you for your patience.</p>

        <Button variant="link" asChild>
          <Link to="/">&larr; Go Home</Link>
        </Button>
      </div>
    </section>
  );
};

export default Error;
