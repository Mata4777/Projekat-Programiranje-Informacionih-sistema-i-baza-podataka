import { Card } from "react-bootstrap";
import EditButtons from "../components/EditButtons";

const NewsNovinar = () => {
  return (
    <div>
      <Card className="mx-auto mt-5" style={{ width: "1200px" }}>
        <Card.Img
          style={{ width: "80%", margin: "0 auto" }}
          variant="top"
          src="src/assets/proba.jpg"
        />
        <Card.Body>
          <Card.Title className="text-center">Big News Title</Card.Title>

          <Card.Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc in
            dapibus lectus. Donec ut neque purus. In tempus et diam et egestas.
            Aliquam erat volutpat. Sed et lacus nisi. Praesent quis lectus vel
            tellus feugiat molestie ac ut elit. Donec consequat tincidunt
            gravida. Proin massa purus, congue volutpat eleifend in, efficitur
            nec metus. Donec venenatis libero eget nunc rutrum euismod. Orci
            varius natoque penatibus et magnis dis parturient montes, nascetur
            ridiculus mus. Aliquam vestibulum convallis lacus, id sollicitudin
            turpis suscipit sed. Vivamus nec accumsan libero, vitae iaculis
            dolor. Aliquam sed iaculis elit, in sodales leo. Curabitur eget
            lorem et eros scelerisque pretium vitae quis dolor. Sed ut rhoncus
            sem, tempus lobortis ante. Ut ut diam non massa feugiat tincidunt.
            Nulla facilisi. Curabitur et pharetra ipsum. Vestibulum aliquam
            faucibus enim, id bibendum risus malesuada vitae. Maecenas sagittis
            ac libero sed dictum. Vivamus rutrum vestibulum mattis. Praesent mi
            libero, feugiat eget magna suscipit, ultrices porta dui. Quisque
            massa mauris, blandit congue augue non, ultricies elementum risus.
            Duis dictum eu sem dictum pretium. Sed suscipit eu odio et
            consectetur. Cras erat erat, fringilla quis euismod sed, mattis eget
            dui. Nam varius felis eget eros interdum condimentum. Integer ut
            magna maximus, hendrerit lectus sit amet, faucibus nibh. Fusce quis
            urna a ex lobortis interdum id vel lorem. Vivamus vel ultricies leo,
            sit amet elementum lorem. Quisque ut risus in nulla mollis varius.
            Nam diam quam, mollis et metus ac, scelerisque rutrum leo. Integer
            ultrices diam a feugiat pulvinar. Curabitur at diam id leo
            consectetur volutpat vel vitae ipsum. Donec finibus a nulla et
            vehicula. Donec elementum aliquet ex, eu congue lectus condimentum
            varius. Sed elementum convallis libero nec accumsan. Cras ultrices,
            dui nec rutrum vestibulum, mauris sem hendrerit dui, non pretium
            lacus eros sit amet erat. Ut et ipsum dictum, auctor tortor eget,
            mattis augue. Nam velit velit, viverra nec convallis quis, lobortis
            eu leo. Ut et gravida augue. Praesent ultricies molestie bibendum.
            Nullam eu aliquam orci. Fusce tempor libero a orci lobortis, eget
            pulvinar risus gravida. Pellentesque eget facilisis nulla, eget
            scelerisque odio. Donec nec congue tortor, commodo varius tellus.
            Phasellus consequat vitae nisi sagittis dictum. Maecenas malesuada
            sapien hendrerit neque lacinia, sed tincidunt turpis consequat.
            Quisque sodales, orci eget tincidunt porta, ipsum lacus placerat
            elit, sit amet elementum turpis enim vitae magna. Maecenas eget
            cursus massa. Suspendisse eros ante, mollis non aliquet quis,
            tincidunt non felis. Aliquam erat volutpat. Nam mattis leo ut quam
            egestas facilisis. Cras ullamcorper sodales lacus vel molestie. Ut
            ac ex eget erat luctus rhoncus. Nam tempor odio at enim dapibus
            consequat. Pellentesque feugiat pretium ligula, id tempus tellus
            rutrum molestie. Aliquam congue ac ipsum ac consequat. Curabitur sit
            amet nisi ut massa faucibus scelerisque. Vestibulum maximus interdum
            mollis. Curabitur et urna consectetur, finibus orci vel, scelerisque
            lectus. Aenean aliquet justo sed luctus tempor. Donec bibendum,
            ligula id elementum egestas, lorem velit cursus ex, sodales feugiat
            orci velit convallis leo. Praesent porta, neque at dignissim
            finibus, nibh enim tincidunt dolor, in finibus erat lectus id quam.
            Integer eu.
          </Card.Text>
          <EditButtons />
        </Card.Body>
      </Card>
    </div>
  );
};

export default NewsNovinar;
