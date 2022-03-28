import {Col, Row} from "antd";

export default function BlogHeadline() {
	return (
		<Row
			align="middle"
			style={{
				height: 400,
				textAlign: "center"
			}}
		>
			<Col span={24}>
				<h1
					style={{
						fontSize: 70,
						fontWeight: "bold"
					}}
				>
					Jason Blog NextJs
				</h1>
				<p
					style={{
						fontSize: 24
					}}
				>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem quasi,
					atque molestiae totam voluptatibus voluptas alias praesentium quae
					illo dolores officia eveniet minus optio vero nobis, eaque beatae
					autem temporibus? Iure alias error, vero accusamus dolorum possimus
					autem sapiente debitis tenetur voluptas doloremque non placeat dolorem
					ut, odio corrupti eum magni ad itaque quae ipsam eligendi enim. Sed,
					ipsam recusandae. Commodi totam minus soluta perspiciatis ea? Facere
					autem eos accusamus. Repudiandae, hic accusantium? Odit nisi excepturi
				</p>
			</Col>
		</Row>
	);
}
