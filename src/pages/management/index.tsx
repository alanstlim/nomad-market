import { MdDelete, MdModeEdit } from "react-icons/md";
import Button from "../../components/Button";
import * as St from "./styles";
import THEMES from "../../styles/theme";
import { Link } from "react-router-dom";

const Management: React.FC = () => {
  return (
    <St.Content>
      <St.Title>Management</St.Title>
      <Link to="product">
        <Button title="Register a new product" type="button" />
      </Link>
      <St.Table>
        <St.TableHead>
          <St.TR>
            <St.TH>Image</St.TH>
            <St.TH>Name</St.TH>
            <St.TH>Price</St.TH>
            <St.TH>Description</St.TH>
            <St.TH>Action</St.TH>
          </St.TR>
        </St.TableHead>
        <tbody>
          <St.TR>
            <St.TD>
              <St.Image
                src="https://static.wixstatic.com/media/8ae8c6_0563d6ac19a24606a7000fef50a89875~mv2.png/v1/fill/w_560,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/morango.png"
                alt="Nome do produto"
              />
            </St.TD>
            <St.TD>StrawBerry</St.TD>
            <St.TD>6000</St.TD>
            <St.TD>Organic, best quality</St.TD>
            <St.TD>
              <Link to="product">
                <MdModeEdit size={24} color={THEMES.colors.secondary} />
              </Link>
              <MdDelete size={24} color={THEMES.colors.error} />
            </St.TD>
          </St.TR>
          <St.TR>
            <St.TD>
              <St.Image
                src="https://static.wixstatic.com/media/8ae8c6_0563d6ac19a24606a7000fef50a89875~mv2.png/v1/fill/w_560,h_382,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/morango.png"
                alt="Nome do produto"
              />
            </St.TD>
            <St.TD>Mango</St.TD>
            <St.TD>5150</St.TD>
            <St.TD>Organic, best quality</St.TD>
            <St.TD>
              <Link to="product">
                <MdModeEdit size={24} color={THEMES.colors.secondary} />
              </Link>
              <MdDelete size={24} color={THEMES.colors.error} />
            </St.TD>
          </St.TR>
        </tbody>
      </St.Table>
    </St.Content>
  );
};

export default Management;
