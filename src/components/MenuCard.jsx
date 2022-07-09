import { useNavigate } from "react-router-dom";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function MenuCard({ title, path, icon }) {
  let navigate = useNavigate();
  return (
    <Card body className="bg-light text-center text-secondary">
      <header className="display-1 mb-3" role="img">
        {icon}
      </header>
      <Button variant="primary" onClick={() => navigate(path)}>
        {title}
      </Button>
    </Card>
  );
}

export default MenuCard;
