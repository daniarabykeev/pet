import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { productsContext } from "../contexts/ProductsContext";
import { useNavigate } from "react-router-dom";
import { notifySuccess } from "./Notify";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function ProductCard({ item }) {
  const { deleteProduct, getProducts, products } =
    React.useContext(productsContext);
  const navigate = useNavigate();
  const [expanded, setExpanded] = React.useState(false);

  React.useEffect(() => {
    getProducts();
  }, []);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <div>
      <Card sx={{ width: 300, marginRight: "30px" }}>
        <CardHeader
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon
                onClick={(e) => {
                  navigate(`/edit/${item.id}`);
                }}
              />
            </IconButton>
          }
          title={item.title}
          subheader=""
        />
        <CardMedia
          component="img"
          height="194"
          image={item.image}
          alt="Paella dish"
        />
        <CardContent>
          <Typography
            sx={{ display: "flex", justifyContent: "center" }}
            variant="h6"
            color="green"
          >
            $ {item.price}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
            <FavoriteIcon />
          </IconButton>
          <IconButton aria-label="share">
            <DeleteForeverIcon
              onClick={(e) => {
                deleteProduct(item.id);
                notifySuccess("deleted");
              }}
            />
          </IconButton>
          <ExpandMore
            expand={expanded}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon />
          </ExpandMore>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph>Description:</Typography>
            <Typography paragraph>{item.description}</Typography>
          </CardContent>
        </Collapse>
      </Card>
    </div>
  );
}
